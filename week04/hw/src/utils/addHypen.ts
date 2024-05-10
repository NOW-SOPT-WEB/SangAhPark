export function addHyphensToPhoneNumber(): string {
  const cleaned = event.target.value.replace(/\D/g, '');

  let formatted = '';
  if (cleaned.length <= 3) {
    formatted = cleaned.replace(/(\d{3})/, '$1');
  } else if (cleaned.length <= 7) {
    formatted = cleaned.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    formatted = cleaned.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }
  return formatted;
}
