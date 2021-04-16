English | [Indonesia](/README.en-US.md)


# Wishxporter

A CLI tool for export your gacha wish history from Genshin Impact account into Excel file.

If you get benefit from this CLI tool [please treat me 3 - 5 ice cream on Trakteer.id](https://trakteer.id/satyakresna)

## Motivation

As we know Genshin Impact will store gacha history around 6 months and after that it will be reset. Instead of use notepad and copy paste manually, why don't make it easier by use CLI tool? By backup gacha history you can track and analyze your gacha history.

## List of Back Up Data

- Character Event Wish
- Weapon Event Wish
- Permanent Event Wish

## Requirement and Installation

It requires node js with minimum version 10. After that install cli with command

```bash
npm install -g wishxporter
```

Please run `wishxporter --help` to more information.

## Usage

### Get authkey

There are five methods how to get `authkey` from Genshin Impact:

#### **PC (Windows)**

1. Open Paimon menu [ESC].
2. Click Feedback.
3. Wait until all page have been loaded and your browser will open.
4. Copy and create file with name **auth.txt** and paste it there.
5. Run `wishxporter --file=auth.txt`.

#### **PC (Windows) optional method**

**ATTENTION: MAKE SURE YOU ALREADY LOGIN TO GENSHIN IMPACT AND GO TO GACHA EVENT WISH PAGE SO authkey STORE IN output_log.txt**

1. Copy `output_log.txt` file from ~/AppData/LocalLow/miHoYo/Genshin Impact (for Windows OS) and paste in new directory (e.g. export-player-gacha)
2. Go to export-player-gacha directory and run `wishxporter`. The CLI will fetch data from Mihoyo API with `authkey` from `output_log.txt` then store data into Excel file.

#### **Android**

1. Open Paimon menu.
2. Tap Feedback.
3. Wait until all page have been loaded.
4. Turn off wifi dan celular data.
5. Tap refresh on the top right corner.
6. Feedback page should be error and it will be show black text.
7. Tap and hold text then select all, then copy all text!
8. Create a file with name **auth.txt** in your computer and paste the result there.
9. Run command `wishxporter --file=auth.txt`.

#### **iOS**

1. Open Paimon menu.
2. Tap Feedback.
3. Wait until all page have been loaded.
4. Tap Masalah Game.
5. Tap Mode Co-Op.
6. There's a blue link below reply, click that link.
7. Your browser will open, copy that link and make file with name **auth.txt** in your computer and paste the result in that file.
8. Run command `wishxporter --file=auth.txt`

If it doesn't successful fetch data you will get error message like this:

`Cannot get your gacha data because: authkey timeout! Please try again later.`

## FAQ

### Is this CLI collect gacha history behind the scene?

This CLI just to export your gacha wish history from Genshin Impact account into Excel file by using `authkey`. `authkey` also doesn't store in behind the scene and also gacha history data doesn't store in behind the scene.

### Is this CLI violate rules from MiHoYo?

From my perspective is no because it just fetch data and not modify or edit data in Genshin Impact game. For the proof I have been try this CLI tool and here's my [Genshin Wish History file](https://drive.google.com/file/d/1Ny5LRSx4KjuarU6Dvn2S4mv2G9xYsn9O/view?usp=sharing).

### Takagg has been share about the same mechanism with desktop app. Why you don't use that instead of make CLI?

[Takagg has been make the same mechanism with desktop app](https://www.youtube.com/watch?v=EiW5-TwOOtI) but I want to know how exactly what's going on behind the scene of that desktop app. Luckily, [the source code is open](https://github.com/takagg/genshin-gacha-export) and I can check too.

Also, I want to make the simple thing for myself as possible and maybe you can get benefit from my CLI tool. :)

## Inspiration

Thanks to:

1. [takagg/genshin-gacha-export](https://github.com/takagg/genshin-gacha-export) yang sebenarnya berasal dari [biuuu/genshin-wish-export](https://github.com/biuuu/genshin-wish-export) 
2. [thesadru/genshinstats](https://github.com/thesadru/genshinstats)
3. [Situs paimon.moe](https://paimon.moe/wish) for provide method how to get `authkey` from Feedback menu in Genshin Impact game.

