### 2. CUSTOM_GUIDE.md
*Focus: Technical instructions for the "Free User".*

```markdown
# 🛠️ Customization Guide

Follow these steps to personalize your new portfolio.

## 1. Changing the Colors
All colors are managed via CSS Variables in `style.css`. To change the accent color (the primary purple/blue), modify these values:

```css
:root {
    --accent: #6366f1; /* Your new primary color */
    --accent-light: #818cf8;
}

2. Modifying the Typewriter Text
The words that appear in the typing animation are stored as a JSON string in the HTML. Look for this line in index.html:
<span class="auto-text" data-texts='["Frontend Developer", "Web Designer"]'></span>
Simply edit the array inside data-texts to change the job titles.

3. Adjusting Scroll Animations
If you want the animations to be slower or faster, adjust the transition duration in style.css under the .reveal class:
.reveal {
    transition: opacity 0.8s ease, transform 0.8s ease; /* Change 0.8s to your preference */
}

4. Setting up FormSubmit
This template uses FormSubmit to handle emails. To ensure you receive messages:
1. Ensure your email is correct in the form action attribute.
2. After the first submission, you will receive an email from FormSubmit to confirm your email address.
3. Once confirmed, all future messages will go straight to your inbox.