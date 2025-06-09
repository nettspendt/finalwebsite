const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Mother',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "As a mother of two growing kids, making sure my family has clean, safe water has always been a top priority. When I discovered Water, everything changed—they helped me understand the best water systems for our home and guided me through the purchase process. Before that, we struggled with hard water and even occasional boil advisories in our area. Since switching, I’ve noticed my kids’ skin conditions improving, and even our food tastes better with filtered water. Water didn’t just sell us a product—they gave us peace of mind and better health.",
  },
  {
    name: 'James Cha',
    position: 'Single Father',
    photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    text:
      'As a single dad, I juggle a lot, and making sure my son stays healthy is at the top of the list. Water made it easy for me to install a system that gives us clean, reliable drinking water without breaking the bank. I no longer worry about what’s coming out of our tap, especially when I fill his lunch bottles. It’s one less thing on my plate, and that peace of mind is priceless. They treated us like more than just customers—they understood our needs as a small family.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Division I Sprinter',
    photo: 'https://randomuser.me/api/portraits/men/18.jpg',
    text:
      "As a Division I athlete, hydration isn't optional—it's everything. Before finding Water, I didn’t realize how much the quality of my water affected my performance and recovery. They helped me choose a high-grade filtration system that fits in my dorm, and I’ve felt the difference in my energy and endurance. It’s not just about drinking water—it’s about drinking the right water. Thanks to Water, I’m performing at my best.",
  },
  {
    name: 'Renee Sims',
    position: 'Olympian',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Training for the Olympics demands the best from every part of your life—including your water. With Water’s help, I now have access to purified, mineral-balanced water that supports my recovery and keeps my body functioning at peak levels. Their team understood the intensity of my routine and tailored a solution to match it. It’s rare to find a company that aligns with the discipline and detail we live by as athletes. Water is now a crucial part of my training toolkit.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)