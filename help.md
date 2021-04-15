# _wishxporter_

Usage:

`wishxporter --file=<filename.txt>`

OR

`wishxporter`

That command assume that `output_log.txt` provide in root directory.

OR

`wishxporter --sendto=gdrive`

That command will read secret key with name AUTHKEY_URL from .env file or secrets menu in GitHub and then will send to Google Drive.

Options:

  `--help`,  Show this message
  `--file`,  Filename (required if you use it in local computer)
  `--sendto`, Send to online backup platform (e.g. Google drive) (required if you use it for online backup)

See https://github.com/satyakresna/wishxporter for more information