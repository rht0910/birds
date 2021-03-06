﻿const { Client, Logger } = require("../src/")
const logger = Logger.getLogger("test")
const language_codes = [
  "en",
  "ja",
]
const client = new Client({ language: "ja", language_extension: ".json", language_codes: language_codes, prefix: "t:" })

client.on("ready", () => {
  logger.info("Ok, logged in as: " + client.user.username)
  logger.info("とーくん:" + client.token)
  logger.info("rawPing:" + client.ping)
  logger.info("roundedPing:" + client.roundedPing)
})

client.on("message", async msg => {
  if (msg.content === "ping") {
    logger.info("rawPing:" + msg.client.ping)
    logger.info("roundedPing:" + client.roundedPing)
  }
})

client.on("birdsError", e => {
  logger.error(e)
})

client.login("<Token>")
