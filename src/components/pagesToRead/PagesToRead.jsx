import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getReadListedBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const books = useLoaderData();
  const [graphBooks, setGraphBooks] = useState([]);

  useEffect(() => {
    const readingListIds = getReadListedBooks();
    if (books.length > 0) {
      const booksInReadList = [];
      for (const id of readingListIds) {
        const exists = books.find(book => book.bookId === id);
        if (exists) {
          booksInReadList.push({
            name: exists.bookName,
            uv: exists.totalPages,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
      }
      setGraphBooks(booksInReadList);
    }
  }, [books]);

  return (
    <div className='my-20 text-gray-500 font-work-sans'>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={graphBooks}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />

          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {graphBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
