var pemanduController = {}
var shortcutFunction = require('../programs/shortcutFunction')

pemanduController.getPemanduProfile = (req, res) => {
    console.log("Masuk gan");
    res.json({ status:200, success: true ,message: 'Sukses Masuk Backend' })
}