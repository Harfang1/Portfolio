import BlurText from "@/components/ui/Blur_ui";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

<BlurText
  text="Isn't this so cool?!"
  delay={200}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>