# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop Screenshot](./public/desktop-screenshot.png)
![Mobile Screenshot](./public/mobile-screenshot.png)

### Links

- Solution URL: [Github Link](https://your-solution-url.com)
- Live Site URL: [Live Site](https://master--gentle-horse-00db64.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I relearned a bit about forms in React and refreshed my knowledge of state management. 

Below is my code on the email validation

//helper function for object mapping
const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
        result[key] = mapFn(object[key])
        return result
    }, {})
}

```js
    const submitForm = (event) => {
        event.preventDefault();

        const check = objectMap(form,
            ({placeHolder, value }) => {
                //only run the email check if the email is entered otherwise this is a different error
                if (value && placeHolder === "Email Address")
                    //Return nothing if email is valid
                    return EMAIL_REGEX.test(value) ? "" : "Looks like this is not an email"
                else if (!value)
                    return `${placeHolder} cannot be empty`
                else
                    return ""
            })

            setError(check)
    }
```

### Useful resources

- [CSS Grid CheatSheet](https://css-tricks.com/snippets/css/complete-guide-grid/) - Always useful for knowing CSS grind tricks and tips
- [Explanation on Input Field Placeholder](https://www.w3schools.com/howto/howto_css_placeholder.asp) - Mostly because I forgot
- [Email Validation](https://www.w3resource.com/javascript/form/email-validation.php) - I stole the regex from this website

## Author

- Frontend Mentor - [@wendycheang](https://www.frontendmentor.io/profile/wendycheang)