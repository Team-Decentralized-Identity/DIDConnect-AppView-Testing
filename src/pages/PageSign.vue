
  <script>
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  //import axios from "axios";
  
  export default {
    setup() {
      const router = useRouter();
      const state = reactive({
        identifier: "",
        password: "",
        hasError: false,
        errorMessage: ""
      });
  
      const signup = async () => {
        try {
          // Attempt to create an account
          let response = await Request({
            method: 'post',
            url: 'https://didconnect.tech/xrpc/create-account',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            data: {
              identifier: state.identifier,
              password: state.password
            }
          });
  
          if (response.data.success) {
            // Generate invite code
            response = await Request({
              method: 'get',
              url: 'https://didconnect.tech/xrpc/generate-invite',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${response.data.token}`
              }
            });
  
            if (response.data.code) {
              router.replace({ name: "home" });
            } else {
              state.hasError = true;
              state.errorMessage = "Failed to generate invite code.";
            }
          } else {
            state.hasError = true;
            state.errorMessage = "Failed to create account.";
          }
        } catch (error) {
          state.hasError = true;
          state.errorMessage = error.message || "An unknown error occurred.";
        }
      };
  
      return { state, signup };
    },
  };
  </script>

<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <div class="form-group">
          <input type="text" id="identifier" v-model="state.identifier" class="form-control" placeholder="Email or username" required autofocus>
        </div>
  
        <div class="form-group">
          <input type="password" id="password" v-model="state.password" class="form-control" placeholder="Password" required>
        </div>
  
        <p v-if="state.hasError" class="error-message">
          {{ state.errorMessage }}
        </p>
  
        <button type="submit" class="submit-btn">Sign Up</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .signup-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 10px;
  }
  .form-control {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .error-message {
    color: red;
    margin-bottom: 10px;
  }
  .submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>

  
/*
import { createAccount } from "@/lib/bsky";
/*
* Requried information for creating account to PDS entryway https://didconnect.tech/xrpc/com.atproto.server.createAccount
*{
    "email": "string",
    "handle": "string",
    "did": "string",
    "inviteCode": "string",
    "verificationCode": "string",
    "verificationPhone": "string",
    "password": "string",
    "recoveryKey": "string",
    "plcOp": {}
*  }
*/
/**
 * @type Create account
 */
const request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://didconnect.tech/xrpc',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});

/**
 * Genertate invite code for account
 */
const request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://didconnect.tech/xrpc',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer <TOKEN>'
  }
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
*/