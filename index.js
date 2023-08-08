const { Telegraf } = require('telegraf');
const { Keyboard } = require('telegram-keyboard');
const translator = require('translation-google');

const bot = new Telegraf("6152016965:AAE7h70r5IMygttwoHPhs6_GJsUrzO0ocNk");

bot.start(async (ctx) => {
  const keyboard = Keyboard.make([
    // ["🇬🇧 English - 🇺🇿 Uzbek tarjimon"],
    // ["🇺🇿 O'zbekcha - 🇬🇧 Inglizcha tarjimon"],
    ["👮‍♂️ Admin bilan bog'lanish"]
  ]);

  await ctx.reply("Ushbu tarjimon botga xush kelibsiz. Tarjima qilinishi kerak bo'lgan gap yoki so'zni yuboring! Bot haqidagi yangiliklarni ushbu kanalda bilishingiz mumkin: @uzengtranslatorbotchannel", keyboard.reply());

});

// bot.hears("🇬🇧 English - 🇺🇿 Uzbek tarjimon", async (ctx) => {
//   const keyboard = Keyboard.make([
//     ["◀️ Ortga"]
//   ]);

//   await ctx.reply("Tarjima qilinishi kerak bo'lgan gap yoki so'zni kiriting (en-uz)", keyboard.reply());

//   if (ctx.update.message.text == "🇬🇧 English - 🇺🇿 Uzbek tarjimon") {
//     bot.on("text", async (ctx) => {
//       ctx.telegram.forwardMessage("@uzengtranslatorbotaud", ctx.message.chat.id, ctx.message.message_id).then(function() {
//         console.log("Message forwarded!");
//       });
//       const text = ctx.update.message.text;
//       const translation = await translator(text, { from: "en", to: "uz" });

//       if (translation.text == text) {
//         const retranslation = await translator(text, { from: "uz", to: "en" });
//         await ctx.reply(retranslation.text, keyboard.reply());
//       } else {
//         await ctx.reply(translation.text, keyboard.reply());
//       }
//     });
//   }
// });

// bot.hears("🇺🇿 O'zbekcha - 🇬🇧 Inglizcha tarjimon", async (ctx) => {
//   const keyboard = Keyboard.make([
//     ["◀️ Ortga"]
//   ]);

//   await ctx.reply("Tarjima qilinishi kerak bo'lgan gap yoki so'zni kiriting (uz-en)", keyboard.reply());

//   if (ctx.update.message.text == "🇺🇿 O'zbekcha - 🇬🇧 Inglizcha tarjimon") {
//     bot.on("text", async (ctx) => {
//       ctx.telegram.forwardMessage("@uzengtranslatorbotaud", ctx.message.chat.id, ctx.message.message_id).then(function() {
//         console.log("Message forwarded!");
//       });
//       const text = ctx.update.message.text;

//       const translation = await translator(text, { from: "uz", to: "en" });

//       if (translation.text == text) {
//         const retranslation = await translator(text, { from: "en", to: "uz" });
//         await ctx.reply(retranslation.text, keyboard.reply());
//       } else {
//         await ctx.reply(translation.text, keyboard.reply());
//       }
//     });
//   }
// });

// bot.hears("◀️ Ortga", async (ctx) => {
//   const keyboard = Keyboard.make([
//     ["🇬🇧 English - 🇺🇿 Uzbek tarjimon"],
//     ["🇺🇿 O'zbekcha - 🇬🇧 Inglizcha tarjimon"],
//     ["👮‍♂️ Admin bilan bog'lanish"]
//   ]);

//   await ctx.reply("Ushbu tarjimon botga xush kelibsiz. Iltimos, kategoriyani tanlang!", keyboard.reply());
// });

bot.hears("👮‍♂️ Admin bilan bog'lanish", async (ctx) => {
  // const keyboard = Keyboard.make([
  //   ["◀️ Ortga"]
  // ]);

  await ctx.reply("Ushbu bot admini va yaratuvchisi: @jahongirsobirov07. Reklama, taklif yoki xatolik bo'lsa @jahongirsobirov07-ga murojat qilishingiz mumkin");
});

bot.on('text', async (ctx) => {
  ctx.telegram.forwardMessage("@uzengtranslatorbotaud", ctx.message.chat.id, ctx.message.message_id).then(function() {
    console.log("Message forwarded!");
  });
  const uzenTranslation = await translator(ctx.update.message.text, { from: "uz", to: "en" });
  const enuzTranslation = await translator(ctx.update.message.text, { from: "en", to: "uz" });

  ctx.reply(`🇺🇿: ${enuzTranslation.text} \n 🇬🇧: ${uzenTranslation.text}`);
});

bot.launch();
