/**
 * Contains the miscellaneous route handlers.
 * @author Wisdom Sena <https://github.com/wisdomsena36>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
