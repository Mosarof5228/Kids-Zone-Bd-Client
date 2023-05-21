import GalaryImgCard from "./GalaryImgCard";



const GalaryPage = () => {
    const kidsCars = [
        {
            id: 1,
            photo: "https://resources.stuff.co.nz/content/dam/images/1/9/v/j/6/g/image.related.StuffLandscapeSixteenByNine.620x349.19vj5a.png/1455846128995.jpg",
            name: "Tesla Model S",
            brandValue: 9,

        },
        {
            id: 2,
            photo: "https://marketplacer.imgix.net/D_/vc7GIcDfY9bojpQg7x9zCLZFw.jpg?auto=format&fm=pjpg&fit=clip&w=635&h=508&s=598e29805e25dfe07e65c52f4077fae0",
            name: "Audi R8",
            brandValue: 8,

        },
        {
            id: 3,
            photo: "https://cdn.shopify.com/s/files/1/1900/2575/products/Kids-12V-Electric-Ride-On-Car-BMW-i8-Style-Battery-Car-with-Parental-Remote-1_700x700.jpg?v=1609180868",
            name: "Mercedes-Benz GLE",
            brandValue: 9,

        },
        {
            id: 4,
            photo: "https://collectingcars.imgix.net/008442/DSC-0644.jpg?w=1280&auto=format",
            name: "BMW M4",
            brandValue: 7,

        },
        {
            id: 5,
            photo: "https://cdn.shopify.com/s/files/1/0030/6603/6291/products/83400_6_4d7f5542-0dd5-4800-9f28-66abe626ddd4_1050x700.jpg?v=1665011536",
            name: "Porsche 911",
            brandValue: 8,

        },
        {
            id: 6,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC92QqDQMS3e1ewKhu37OvThjDaa9oGSRzVv6RyTSlgZ_dEzZYhnT84aZKmzxoUKMjdw&usqp=CAU",
            name: "Toyota Camry",
            brandValue: 6,

        },
        {
            id: 7,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC92QqDQMS3e1ewKhu37OvThjDaa9oGSRzVv6RyTSlgZ_dEzZYhnT84aZKmzxoUKMjdw&usqp=CAU",
            brandValue: 9,

        },
        {
            id: 8,
            photo: "https://www.kidscars.co.nz/wp-content/uploads/2021/09/71FqsHWDeRL._AC_SL1500_.jpg",
            name: "Ford Mustang",
            brandValue: 7,

        },
        {
            id: 9,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g4uLaPJe9G18Zm95xg89bTztmEV9TBwQyRdxUiI3btXrLHOVAolQc-nqodgQUzHTeDc&usqp=CAU",
            name: "Chevrolet Corvette",
            brandValue: 8,

        }
    ];


    return (
        <div className="mt-5">
            <h2 className="text-center font-bold text-4xl title-background bg-pink-500 py-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-3"> Spectacular Collection of Kids Dream Cars</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-3">
                {
                    kidsCars.map(kidsCar => <GalaryImgCard
                        key={kidsCars.id}
                        kidsCar={kidsCar}
                    ></GalaryImgCard>)
                }
            </div>
        </div>
    );
};

export default GalaryPage;