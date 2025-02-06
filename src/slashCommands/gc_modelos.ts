import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../types";

const testCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("modelos")
        .setDescription("Test command")
        /*.addStringOption(option => {
            return option
                .setName("content")
                .setDescription("this is a parameter for a command")
                .setRequired(false);
        })*/,
    execute: async (interaction) => {

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Modelos" })
                    .setDescription(`👋 [Modelos da Rainha](https://discord.com/channels/1291755006592028756/1332641926628769885/1332645470962716672)!`)
            ]
        })
    },
    cooldown: 3
}

export default testCommand;