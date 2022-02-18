const { Event } = require("../../model");

module.exports = {
  getAll,
  getOneById,
  create,
  delete: _delete,
  update,
};

async function getAll({ page_size, page_number }) {
  let events = [];
  page_size = parseInt(page_size, 10);
  page_number = parseInt(page_number, 10);
  const page = Math.max(0, page_number);
  const date = new Date();

  /*

  Get events that didn't pass

  date: { $gte: date.toISOString() }

  */

  if (page_size > 20) {
    //Limit size
    page_size = 20;
  }

  events = await Event.find({})
    .limit(page_size)
    .skip(page_size * page)
    .sort({ date: 1 });

  return events;
}

async function getOneById(id) {
  let event = {};

  return event;
}

async function create(details) {
  let event;
  const {
    name,
    date,
    location,
    description,
    campus_name,
    created_by,
    more_details,
  } = details;

  return event;
}

async function _delete(id) {
  return;
}

async function update({ id, details }) {
  return;
}
