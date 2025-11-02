
// regex de email
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// validação de nome/sobrenome: 3..50 caracteres
function validName(v) {
  if (!v) return false;
  const t = v.trim();
  return t.length >= 3 && t.length <= 50;
}

// validação de email usando regex
function validEmail(v) {
  if (!v) return false;
  return EMAIL_REGEX.test(v.trim());
}

// validação de idade: inteiro positivo menor que 120
function validAge(v) {
  if (v === null || v === undefined) return false;
  const n = Number(v);
  return Number.isInteger(n) && n > 0 && n < 120;
}

// função para disparar download de um arquivo com nome e conteúdo (json/text)
function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
