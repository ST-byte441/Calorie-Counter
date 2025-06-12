import { Collection, Db, ObjectId } from "mongodb"
import { MongoClient, ServerApiVersion } from 'mongodb'

const PresetController = (collection) => ({
    //Get all items in the Daily List
    async getAllItems(req, res, next) {
        try {
            const items = await collection.find({}).toArray();
            res.locals.preset = items;
            return next();
        } catch (err) {
            return next('Error in PresetController.getAllItems: ' + JSON.stringify(err));
        }
    },

    async addItem(req, res, next) {
        try {
            const { name, calories } = req.body;
            const result = await collection.insertOne({ name, calories });
            res.locals.newPreset = {_id: result.insertedId, name, calories};
            return next();
        } catch (err) {
            return next('Error in PresetController.addItem: ' + JSON.stringify(err))
        }
    },

    async deleteItem(req, res, next) {
        try {
            const id = req.params.id;
            await collection.deleteOne({_id: new ObjectId(id)});
            res.locals.deletedPresetItem = 'Succesfully deleted item!';
            return next();
        } catch (err) {
            return next('Error in PresetController.deleteItem: ' + JSON.stringify(err))
        }
    }
});

export default PresetController