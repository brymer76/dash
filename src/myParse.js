import Parse from "parse/dist/parse.min.js";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "kPBDhaysDjW7vjJOkMXSaJGHiZLtuRQEmnhH4Y3A";
const PARSE_HOST_URL = "https://parseapi.back4app.com";
const PARSE_JAVASCRIPT_KEY = "twJzJzcGjDLocsbciaEHU3sh3FAEwimfayc8Ab01";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default Parse;