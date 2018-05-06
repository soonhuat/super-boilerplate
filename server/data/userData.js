import User from '../models/user';

export default function () {
  User.count().exec((err, count) => {
    // if (count > 0) {
    //   return;
    // }

    const masterAdminUser = new User({
      username: "admin",
      password: "password",
      slug: "adminstrator",
      phone: "0169605454",
      gorgiasId: 1064,
      gorgiasName: "Aliff Aziz",
      country: "Malaysia",
      currencyCode: "MYR",
      email: "aliff@gmail.com",
      isGorgiasApproved: true,
      logo: "profile-1064.jpg",
      industryType: "education",
      isDeleted: "n",
      active: "y",
      details: [
        {
          name: "Administrator",
          description: "<p>Description</p>",
          language: "en",
          isDefault: true
        }
      ],
      photos: [],
      role: "admin",
    });

    User.create([masterAdminUser], (error) => {
      if (!error) {
        // console.log('ready to go....');
        return
      } else {
        // console.log(error)
        return
      }
    });
  });
}
