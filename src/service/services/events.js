module.exports = {
  getAll,
  getOneById,
  create,
  delete: _delete,
  update,
};

async function getAll({ page_size, page_number }) {
  let events = [
    { name: "Prayers", description: "This event is tomorrow" },
    { name: "Event 2", description: "This event was yesterday" },
    { name: "Event 3", description: "Hello World! Coding Marathon" },
  ];
  page_size = parseInt(page_size, 10);
  page_number = parseInt(page_number, 10);

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
