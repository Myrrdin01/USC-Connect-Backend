module.exports = {
  getAll,
  getOneById,
  create,
  delete: _delete,
  update,
};

async function getAll({ page_size, page_number }) {
  let resources = [];
  page_size = parseInt(page_size, 10);
  page_number = parseInt(page_number, 10);

  return resources;
}

async function getOneById(id) {
  let resource = {};

  return resource;
}

async function create(details) {
  let resource;
  const { date, location, description, title } = details;

  return resource;
}

async function _delete(id) {
  return;
}

async function update({ id, details }) {
  return;
}
