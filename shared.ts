import { google } from "googleapis";
import yargs from "yargs/yargs";
const { hideBin } = require("yargs/helpers");

export async function getArgs() {
  const argv = await Promise.resolve(yargs(hideBin(process.argv)).argv);

  const clientId = argv["clientId"] as string;
  const clientSecret = argv["clientSecret"] as string;

  const code = argv.code as string | undefined;
  const refreshToken = argv.refreshToken as string | undefined;
  const test = argv.test as boolean;

  if (!clientId) throw new Error("No clientId ");
  console.log("We have a clientId");
  if (!clientSecret) throw new Error("No clientSecret");
  console.log("We have a clientSecret");

  if (code) console.log("We have a code");
  if (refreshToken) console.log("We have a refreshToken");

  return { code, clientId, clientSecret, refreshToken, test };
}

export function makeOAuth2Client({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) {
  return new google.auth.OAuth2(
    /* YOUR_CLIENT_ID */ "932160326621-vjcl3nd50k6ucgj8p5tflcjfomiqhg9e.apps.googleusercontent.com",
    /* YOUR_CLIENT_SECRET */ "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",
    /* YOUR_REDIRECT_URL */ "http://localhost:8080/oauth2callback"
  );
}
