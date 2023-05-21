import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categorysData, setCategorysData] = useState([]);
    const [categories, setCategories] = useState("bike");

    console.log(categorysData);

    useEffect(() => {
        fetch(`http://localhost:5000/categories?category=${categories}`)
            .then((res) => res.json())
            .then((data) => setCategorysData(data));
    }, [categories]);

    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => setCategories("bike")}>Bike</Tab>
                <Tab onClick={() => setCategories("manual car")}>Manual Car</Tab>
                <Tab onClick={() => setCategories("remote car")}>Remote Car</Tab>
            </TabList>

            <TabPanel>
                <div className='grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto '>
                    {categorysData.map(categoryData => <CategoryCard
                        key={categoryData._id}
                        categoryData={categoryData}
                    ></CategoryCard>)}
                </div>
            </TabPanel>

            <TabPanel>
                {categorysData.length}
            </TabPanel>

            <TabPanel>
                {categorysData.length}
            </TabPanel>
        </Tabs>
    );
};

export default Category;

//http://localhost:5000/categories?category=bike