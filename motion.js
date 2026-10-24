/**
 * WardMotion — Kinetic Reel & Odometer Engine
 * Inspired by Turkyfolio Architecture
 */

window.TurkyMotion = (function() {
  'use strict';

  class Reel {
    constructor(element, options = {}) {
      this.el = element;
      this.track = element.querySelector('.reel-track');
      if (!this.track) return;

      this.speed = options.speed || 20; // pixels per second
      this.reduced = options.reduced || false;
      this.paused = false;
      this.isDragging = false;
      this.startX = 0;
      this.currentX = 0;
      this.dragOffset = 0;
      this.rafId = null;
      this.lastTime = performance.now();

      // Width calculation
      this.firstGroup = this.track.querySelector('.reel-group');
      this.groupWidth = 0;

      this.init();
    }

    init() {
      this.updateWidth();
      window.addEventListener('resize', () => this.updateWidth());

      // Drag events (Pointer API)
      this.el.addEventListener('pointerdown', (e) => this.onPointerDown(e));
      window.addEventListener('pointermove', (e) => this.onPointerMove(e));
      window.addEventListener('pointerup', () => this.onPointerUp());
      window.addEventListener('pointercancel', () => this.onPointerUp());

      // Keyboard navigation
      this.el.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          this.currentX -= 80;
        } else if (e.key === 'ArrowLeft') {
          this.currentX += 80;
        }
      });

      // Hover pause
      this.el.addEventListener('mouseenter', () => { this.isHovered = true; });
      this.el.addEventListener('mouseleave', () => { this.isHovered = false; });

      // Start animation loop
      this.lastTime = performance.now();
      this.tick();
    }

    updateWidth() {
      if (this.firstGroup) {
        this.groupWidth = this.firstGroup.getBoundingClientRect().width;
      }
    }

    onPointerDown(e) {
      if (e.button !== 0) return; // Only primary button
      this.isDragging = true;
      this.startX = e.clientX;
      this.dragOffset = 0;
      this.el.classList.add('dragging');
      this.el.setPointerCapture?.(e.pointerId);
    }

    onPointerMove(e) {
      if (!this.isDragging) return;
      const dx = e.clientX - this.startX;
      this.startX = e.clientX;
      this.currentX += dx;
    }

    onPointerUp() {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.el.classList.remove('dragging');
    }

    setPaused(isPaused) {
      this.paused = isPaused;
    }

    tick() {
      const now = performance.now();
      const delta = (now - this.lastTime) / 1000;
      this.lastTime = now;

      if (!this.paused && !this.reduced && !this.isDragging && !this.isHovered) {
        // Continuous leftward flow
        this.currentX -= this.speed * delta;
      }

      // Loop wrap-around
      if (this.groupWidth > 0) {
        while (this.currentX <= -this.groupWidth) {
          this.currentX += this.groupWidth;
        }
        while (this.currentX > 0) {
          this.currentX -= this.groupWidth;
        }
      }

      if (this.track) {
        this.track.style.transform = `translate3d(${this.currentX}px, 0, 0)`;
      }

      this.rafId = requestAnimationFrame(() => this.tick());
    }

    destroy() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    }
  }

  return { Reel };
})();
