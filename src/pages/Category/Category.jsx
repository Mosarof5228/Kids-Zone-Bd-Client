import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categorysData, setCategorysData] = useState([]);
    const [categories, setCategories] = useState("bike");

    console.log(categorysData);

    useEffect(() => {
        fetch(`https://kids-zone-bd-server.vercel.app/categories?category=${categories}`)
            .then((res) => res.json())
            .then((data) => setCategorysData(data));
    }, [categories]);

    return (
        <Tabs>
            <TabList className="font-bold mb-3 text-center border border-4 border-[#D7F0EC]">
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
                <div className='grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto '>
                    {categorysData.map(categoryData => <CategoryCard
                        key={categoryData._id}
                        categoryData={categoryData}
                    ></CategoryCard>)}
                </div>
            </TabPanel>

            <TabPanel>
                <div className='grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto '>
                    {categorysData.map(categoryData => <CategoryCard
                        key={categoryData._id}
                        categoryData={categoryData}
                    ></CategoryCard>)}
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Category;

//https://kids-zone-bd-server.vercel.app/categories?category=bike