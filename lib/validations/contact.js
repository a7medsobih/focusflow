// lip/validations/contact.js
export function validateContactForm({ name, email, message }) {
    const errors = {};

    if (!name.trim()) {
        errors.name = "اكتب اسمك";
    }

    if (!email.trim()) {
        errors.email = "اكتب إيميلك";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "اكتب إيميل صحيح";
    }

    if (!message.trim()) {
        errors.message = "اكتب رسالتك";
    } else if (message.trim().length < 10) {
        errors.message = "اكتب رسالتك في 10 حروف على الأقل";
    }

    return errors;
}