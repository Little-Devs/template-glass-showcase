import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { TextPlugin } from 'gsap/TextPlugin';

// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// Configure default settings for better performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger, SplitText, TextPlugin };
