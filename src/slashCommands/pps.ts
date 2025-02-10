import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../types";

const pps: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("pps")
        .setDescription("Compra de PP's")
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
                    .setAuthor({ name: "PP's" })
                    .setDescription(`💲 Compra de PP's por mercado (K44): 
                        4€ - 1000 pps
                        8€ - 2000 pps
                        16€ - 4000 pps
                        32€ - 8000 pps
                        ...
                        Falar com @xico ou @YoungRagnar para mais informações!
                        `)
            ]
        })
    },
    cooldown: 3
}

export default pps;