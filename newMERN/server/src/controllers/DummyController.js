const DummyController = async (req, res) => {
  try {
    res.end("Hello Darling");
    console.log('[ERROR NONE] Response sent successfully: ');
  } catch (error) {
    console.log('[ERROR OCCURRED INSIDE CONTROLLER] Error Specified: ', error);
  }
}

module.exports = {
  DummyController: DummyController
};
