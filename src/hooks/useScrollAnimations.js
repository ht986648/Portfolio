import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Parallax background elements
    gsap.utils.toArray('.parallax-bg').forEach((element, index) => {
      gsap.to(element, {
        yPercent: -50 * (index + 1),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Reveal animations for sections
    gsap.utils.toArray('.reveal-section').forEach((section) => {
      gsap.fromTo(section, 
        {
          y: 100,
          opacity: 0,
          scale: 0.95,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger animations for cards
    gsap.utils.toArray('.stagger-cards').forEach((container) => {
      const cards = container.querySelectorAll('.card-item');
      gsap.fromTo(cards,
        {
          y: 80,
          opacity: 0,
          rotationY: 45,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text) => {
      const chars = text.textContent.split('');
      text.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');

      gsap.fromTo(text.querySelectorAll('.char'),
        {
          y: 100,
          opacity: 0,
          rotationX: 90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.02,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Progress bar animations
    gsap.utils.toArray('.progress-bar').forEach((bar) => {
      const progress = bar.querySelector('.progress-fill');
      const percentage = progress.dataset.percentage;
      
      gsap.fromTo(progress,
        { width: '0%' },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Floating elements
    gsap.utils.toArray('.float-element').forEach((element, index) => {
      gsap.to(element, {
        y: -30,
        rotation: 5,
        duration: 3 + index * 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    });

    // Magnetic effect for buttons
    gsap.utils.toArray('.magnetic-button').forEach((button) => {
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};