export default function (): void {
  const { body } = document;

  if (body.style.overflowY === 'hidden') {
    body.style.overflowY = '';
  } else {
    body.style.overflowY = 'hidden';
  }
}
