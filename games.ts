import { google } from "googleapis";
import { getArgs, makeOAuth2Client } from "./shared";

async function makeGamesClient() {
  const { clientId, clientSecret, refreshToken } = await getArgs();
  var cId =
    "932160326621-vjcl3nd50k6ucgj8p5tflcjfomiqhg9e.apps.googleusercontent.com";
  var cSecret = "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";

  const oauth2Client = makeOAuth2Client({
    clientId: cId,
    clientSecret: cSecret,
  });
  oauth2Client.setCredentials({
    refresh_token:
      "4/0AbUR2VP52-r9gs-Ddkpg9dnPw3X9OZESGrllY8i_uf1zpITGmxm25bZsx4gzjEiDu2Cstw",
  });
  const access_token = await oauth2Client.getAccessToken();
  console.log(access_token);

  const gamesClient = google.games({
    version: "v1",
    auth: oauth2Client,
  });
  return gamesClient;
}

async function getGames() {
  const gamesClient = await makeGamesClient();
  //get players profile
  const { data: games } = await gamesClient.players.get({
    playerId: "me",
  });

  alert(games);
}

getGames();
