module.exports = (code, data, message, erroCode) => {
  return {
    code: code,
    data: data || '',
    message: message,
    erroCode: erroCode || ''
  };
};
