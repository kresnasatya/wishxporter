# Wishxporter

An CLI tool for export your gacha wish history from Genshin Impact account into Excel file.

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

## Usage

1. Copy `output_log.txt` file from from ~/AppData/LocalLow/miHoYo/Genshin Impact (for Windows OS) and paste in new directory (e.g. export-player-gacha)
2. Go to export-player-gacha directory and run `wishxporter output_log.txt`. The CLI will fetch data from Mihoyo API with `authkey` from `output_log.txt` then store data into Excel file.

If it doesn't successful fetch data you will get error message like this:

`Cannot get your gacha data because: authkey timeout! Please try again later.`

## FAQ

### Is this CLI violate rules from MiHoYo?

From my perspective it doesn't because it just fetch data and not modify or edit data in Genshin Impact game. For the proof I have been try this CLI tool and here's my [Genshin Wish History file](https://drive.google.com/file/d/1Ny5LRSx4KjuarU6Dvn2S4mv2G9xYsn9O/view?usp=sharing).

### Takagg has been share about the same mechanism with desktop app. Why you don't use that instead of make CLI?

[Takagg has been make the same mechanism with desktop app](https://www.youtube.com/watch?v=EiW5-TwOOtI) but I want to know how exactly what's going on behind the scene of that desktop app. Luckily, [the source code is open](https://github.com/takagg/genshin-gacha-export) and I can check too.

Also, I want to make the simple thing for myself as possible and maybe you can get benefit from my CLI tool. :)

## Inspiration

Thanks to [takagg/genshin-gacha-export](https://github.com/takagg/genshin-gacha-export) originally come from [biuuu/genshin-wish-export](https://github.com/biuuu/genshin-wish-export) and [thesadru/genshinstats](https://github.com/thesadru/genshinstats) as the inspiration of this project. 🙏