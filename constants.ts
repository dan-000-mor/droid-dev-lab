import { BlogPost, FaqItem, Service, Testimonial } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'android-app-development-cost-2024',
    title: 'How Much Does it Cost to Develop an Android App in 2024?',
    date: 'Oct 12, 2024',
    excerpt: 'Building a mobile application is a significant investment. For businesses looking to enter the mobile market, understanding the budget is crucial.',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    content: `
      <p class="mb-4">Building a mobile application is a significant investment. For businesses looking to enter the mobile market, understanding the budget is crucial.</p>
      
      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Factors Influencing the Cost</h3>
      <p class="mb-4">The price of <a href="/#services" class="text-android hover:underline">custom Android app development</a> depends on several factors:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Complexity:</strong> A simple MVP costs less than a feature-rich enterprise app.</li>
        <li><strong>Design:</strong> Custom UI/UX design requires more hours than using standard templates.</li>
        <li><strong>Backend:</strong> If your app needs a server to store data (like user profiles), it adds to the cost.</li>
      </ul>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Average Cost Breakdown</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Basic App (MVP):</strong> $15,000 – $30,000. Time: 2-3 months.</li>
        <li><strong>Medium Complexity (E-commerce):</strong> $30,000 – $60,000. Time: 3-5 months.</li>
        <li><strong>Enterprise App (FinTech/IoT):</strong> $60,000+. Time: 6+ months.</li>
      </ul>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Hidden Costs</h3>
      <p class="mb-4">Don't forget about maintenance and support. After the launch, you will need budget for server costs, third-party APIs, and regular Google Play updates.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Conclusion</h3>
      <p class="mb-4">To get a precise estimate, you need a detailed technical specification. Contact our team at DroidDevLab to calculate your project budget today.</p>
    `
  },
  {
    id: '2',
    slug: 'kotlin-vs-java-for-enterprise',
    title: 'Kotlin vs Java: Why We Migrated to Kotlin for Enterprise Apps',
    date: 'Oct 15, 2024',
    excerpt: 'For years, Java was the king of Android development. However, since Google announced Kotlin as the preferred language, the industry has shifted.',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    content: `
      <p class="mb-4">For years, Java was the king of Android development. However, since Google announced Kotlin as the preferred language, the industry has shifted. Why should your business care?</p>
      
      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">1. Null Safety (Fewer Crashes)</h3>
      <p class="mb-4">The "NullPointerException" was the biggest headache in Java, causing apps to crash unexpectedly. Kotlin solves this at the compiler level. This means our <a href="/#services" class="text-android hover:underline">Android development services</a> guarantee more stable and crash-free applications.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">2. Faster Development</h3>
      <p class="mb-4">Kotlin is more concise. What takes 50 lines of code in Java might take only 20 in Kotlin. Less code means fewer bugs and faster time-to-market for your product.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">3. Future-Proofing</h3>
      <p class="mb-4">Google is developing new features (like Jetpack Compose) primarily for Kotlin. Staying on Java means falling behind.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Our Recommendation</h3>
      <p class="mb-4">If you have an old app written in Java, consider our App Migration services. Moving to Kotlin will reduce technical debt and make future updates cheaper and faster.</p>
    `
  },
  {
    id: '3',
    slug: 'android-app-security-best-practices',
    title: 'Top 5 Android App Security Best Practices for Fintech',
    date: 'Oct 20, 2024',
    excerpt: 'Security is non-negotiable, especially for banking and healthcare apps. Here is how we ensure data protection at DroidDevLab.',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    content: `
      <p class="mb-4">Security is non-negotiable, especially for banking and healthcare apps. Here is how we ensure data protection at DroidDevLab.</p>
      
      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">1. Code Obfuscation</h3>
      <p class="mb-4">We use tools like R8 and ProGuard to obfuscate the code. This makes it incredibly difficult for hackers to reverse-engineer your application and steal intellectual property.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">2. Secure Data Storage</h3>
      <p class="mb-4">Never store sensitive data (passwords, tokens) in plain text. We utilize the Android Keystore system and EncryptedSharedPreferences to keep user data safe.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">3. Secure Network Communication</h3>
      <p class="mb-4">All data transmitted between the app and the server must be encrypted using HTTPS/TLS. We also implement Certificate Pinning to prevent Man-in-the-Middle (MITM) attacks.</p>

      <h3 class="text-2xl font-heading font-bold mb-3 mt-6">Conclusion</h3>
      <p class="mb-4">Security breaches can destroy a brand's reputation. If you are planning a high-security project, trust a professional <a href="/" class="text-android hover:underline">Android development company</a>. We build apps with security-first architecture from day one.</p>
    `
  }
];

export const SERVICES: Service[] = [
  {
    title: "Custom Android App Development",
    description: "Full-cycle development from business analysis and prototyping to deployment. We create tailored solutions for FinTech, Healthcare, E-commerce, and Logistics."
  },
  {
    title: "UI/UX Design for Mobile",
    description: "Creating intuitive and engaging interfaces strictly following Google's Material Design guidelines to ensure the best user retention and experience."
  },
  {
    title: "App Migration (Java to Kotlin)",
    description: "Modernize your legacy codebase. We migrate old Java applications to modern Kotlin architecture to improve stability, maintainability, and speed."
  },
  {
    title: "Maintenance & Support",
    description: "We provide ongoing monitoring, bug fixing, library updates, and performance optimization after the release to ensure your app stays relevant."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mark D.",
    role: "CTO at FinTechStart",
    text: "DroidDevLab migrated our legacy banking app from Java to Kotlin in record time. The performance boost is incredible — our user retention grew by 15%."
  },
  {
    name: "Sarah L.",
    role: "Product Owner",
    text: "We needed a native app with complex Bluetooth integration for our medical IoT devices. Their expertise in Android SDK is unmatched. Highly recommended."
  },
  {
    name: "David K.",
    role: "Founder of RetailGo",
    text: "Transparent communication and clean code. They helped us pass the Google Play moderation from the first try without any rejections."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Why do you prefer Kotlin over Java?",
    answer: "Kotlin is the official language recommended by Google. It is safer (avoids NullPointerExceptions), more concise, and fully interoperable with Java, ensuring faster development and fewer bugs."
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "A basic MVP usually takes 2-3 months. A complex enterprise application might take 4-6+ months. We provide a detailed timeline after the discovery phase."
  },
  {
    question: "Do you help with Google Play publication?",
    answer: "Yes, we handle the entire submission process, ensuring your app meets all Google Play Guidelines and privacy policies."
  }
];