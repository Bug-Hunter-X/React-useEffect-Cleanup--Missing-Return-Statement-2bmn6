```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/api/data', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('There has been a problem with your fetch operation:', error);
        }
      });

    return () => {
      controller.abort(); // Cleanup: Abort the fetch request when component unmounts
    };
  }, []);

  return <div>Count: {count}</div>;
}
```