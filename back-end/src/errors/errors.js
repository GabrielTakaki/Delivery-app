module.exports.NOT_FOUND = { status: 404, message: 'nao achou' };

module.exports.ALREADY_EXISTS = { status: 409, message: 'Usuário já registrado.' };

module.exports.INCORRECT_PASSWORD = { status: 401, message: 'Senha incorreta.' };

module.exports.UNAUTHORIZED = { status: 401, message: 'Sem autorização.' };