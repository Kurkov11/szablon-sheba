
new Glide('.glide',  {
    type: 'carousel',
    autoplay: 8000, // slower autoplay (4 seconds)
    animationDuration: 600, // slower glide animation (0.8s)
    animationTimingFunc: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  }).mount()