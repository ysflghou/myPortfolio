<template>
  <div id="app">
    <form action="https://send.pageclip.co/oGob3qXl1pZ7VX8vyHPmEJ44EmvHN8Wl" class="mail-form" method="post">
      <div class="error-message">
        <p v-show="!email.valid">Oh, please enter a valid email address.</p>
      </div>
      <div class="alert alert-success" v-show="submitted">
        <strong>Thank you !</strong> your message is sent successfully.
      </div>
      <fieldset>
        <legend>Contact</legend>
        <div>
          <label class="label" for="name">Name</label>
          <input type="text" name="name" id="name" required v-model="name" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            :class="{ email , error: !email.valid }"
            v-model="email.value"
          />
        </div>
        <div>
          <label class="label" for="textarea">Your message</label>
          <textarea
            class="message"
            name="textarea"
            id="textarea"
            required
            v-model="message.text"
            :maxlength="message.maxlength"
          ></textarea>
          <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
        </div>
        <div class="submit">
          <input @click="submittedForm()" type="submit" value="Send Message" />
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
var emailRegExp = /\S+@\S+\.\S+/;

export default {
  data: function() {
    return {
      name: "",
      email: {
        value: "",
        valid: true
      },
      message: {
        text: ``,
        maxlength: 300
      },
      submitted: false
    };
  },
  methods: {
    submittedForm: function() {
      this.submitted = true;
      window.scrollTo(0,0);
    },
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    isEmail: function(value) {
      return emailRegExp.test(value);
    }
  },
  watch: {
    "email.value": function(value) {
      this.validate("email", value);
    },

  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    115deg,
    rgba(86, 216, 228, 1) 10%,
    rgba(159, 1, 234, 1) 90%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
.container {
  min-height: 100vh;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

header {
  position: relative;
  height: 150px;
  padding-top: 100px;
}

header h1 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
}

#app {
  display: flex;
}

.mail-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.mail-form fieldset {
  margin: 24px 0 0 0;
}
.mail-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}
.mail-form div {
  position: relative;
  margin: 20px 0;
}
.mail-form h4,
.mail-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.mail-form .label {
  display: block;
}
.mail-form input,
.mail-form textarea,
.mail-form select,
.mail-form label {
  color: #2b3e51;
}
.mail-form input[type="text"],
.mail-form input[type="email"],
.mail-form textarea,
.mail-form select,
.mail-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.mail-form input[type="text"],
.mail-form input[type="email"],
.mail-form textarea,
.mail-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.mail-form input[type="text"]:focus,
.mail-form input[type="email"]:focus,
.mail-form textarea:focus,
.mail-form select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.mail-form .select {
  position: relative;
}
.mail-form .select::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: 16px;
  top: 50%;
  margin-top: -8px;
  display: block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpolygon%20fill%3D%22%232c3e50%22%20points%3D%220.9%2C5.5%203.1%2C3.4%208%2C8.3%2012.9%2C3.4%2015.1%2C5.5%208%2C12.6%20%09%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E")
    no-repeat center center;
  pointer-events: none;
}
.mail-form select {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.mail-form select::-ms-expand {
  display: none;
}
.mail-form .mail-form-list {
  margin-top: 16px;
}
.mail-form .mail-form-list::after {
  clear: both;
  content: "";
  display: table;
}
.mail-form .mail-form-list li {
  display: inline-block;
  position: relative;
  user-select: none;
  margin: 0 26px 16px 0;
}
.mail-form input[type="radio"],
.mail-form input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
}
.mail-form input[type="radio"] + label,
.mail-form input[type="checkbox"] + label {
  padding-left: 24px;
}
.mail-form input[type="radio"] + label::before,
.mail-form input[type="radio"] + label::after,
.mail-form input[type="checkbox"] + label::before,
.mail-form input[type="checkbox"] + label::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -8px;
  width: 16px;
  height: 16px;
}
.mail-form input[type="radio"] + label::before,
.mail-form input[type="checkbox"] + label::before {
  border: 1px solid #cfd9db;
  background: #ffffff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.mail-form input[type="radio"] + label::before,
.mail-form input[type="radio"] + label::after {
  border-radius: 50%;
}
.mail-form input[type="checkbox"] + label::before,
.mail-form input[type="checkbox"] + label::after {
  border-radius: 0.25em;
}
.mail-form input[type="radio"] + label::after,
.mail-form input[type="checkbox"] + label::after {
  background-color: #2c3e50;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
  display: none;
}
.mail-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.mail-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .mail-form input[type="submit"]:hover {
  background: #42a2e1;
}
.mail-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.mail-form input[type="submit"]:active {
  transform: scale(0.9);
}
.mail-form .error-message {
  height: 35px;
  margin: 0px;
}
.mail-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.mail-form .error {
  border-color: #e94b35 !important;
}
.mail-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}

.mail-form .submit {
  text-align: center;
}
@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@-moz-keyframes cd-bounce {
  0%,
  100% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}
</style>