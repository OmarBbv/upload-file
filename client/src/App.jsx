import { useEffect, useState } from "react";
import axios from "axios"

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  const [images, setImages] = useState([]);
  const [obj, setObj] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
    console.log(e.target.files)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('category', formData.category);

    for (let i = 0; i < images.length; i++) {
      form.append('images', images[i]);  
    }

    try {
      await axios.post('http://localhost:3000/api/product/products', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product uploaded successfully!');
    } catch (error) {
      console.error('Error uploading product', error);
      alert('Error uploading product');
    }
  };

  useEffect(() => {
    const f = async () => {
      const response = await axios.get('http://localhost:3000/api/product/get');
      setObj(response.data.data);
      console.log(response.data.data);
    }
    f();
  },[])


  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Images:</label>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <ul>
          {
            obj?.map((item, index) => {
              return <li key={index}>
                <p>{item.name}</p>
                <img style={{width:"200px", height: "200px"}} src={item.images[0]} alt="" />
              </li>
            })
          }
        </ul>
      </div>
    </>
  );
};

export default App;
