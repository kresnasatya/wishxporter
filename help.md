# _wishxporter_

Usage:

`wishxporter --file=<filename.txt>`

OR

`wishxporter`

That command assume that `output_log.txt` OR `.env` file with `AUTHKEY_URL` provide in root directory.

That command will read secret key with name AUTHKEY_URL from .env file or secrets menu in GitHub.

Options:

  `--help`,  Show this message
  `--file`,  Filename (required if you use it in local computer)
  `--lite`,  Lite mode. It will pull the previous (closest) 5 star gacha log along with the current pity count

See https://github.com/satyakresna/wishxporter for more information