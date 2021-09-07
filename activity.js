db.users.find({ firstName: { $regex: 's', $options:'$i' } }).pretty();


