import { getArgs, makeOAuth2Client } from "./shared";

async function getToken() {
  const { clientId, clientSecret, code } = await getArgs();
  const oauth2Client = makeOAuth2Client({ clientId, clientSecret });

  if (code) await getRefreshToken(code);
  else getAuthUrl();

  async function getAuthUrl() {
    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: "offline",

      // scopes are documented here: https://developers.google.com/identity/protocols/oauth2/scopes#calendar
      scope: [
        //view play games profile
        "https://www.googleapis.com/auth/games",
      ],
    });

    console.log(`Go to this URL to acquire a refresh token:\n\n${url}\n`);
  }

  async function getRefreshToken(code: string) {
    const token = await oauth2Client.getToken(code);
    console.log("token is: ");
    console.log(token);
  }
}

getToken();
