function flattenProfile(profile) {
    const {
        name,
        address: {
            city,
            country,
            coordinates: { lat, long }
        },
        contact: { phone, email },
        preferences: {
            notifications: { email: emailNotifications, sms }
        }
    } = profile;

    return {
        name,
        city,
        country,
        phone,
        email,
        coordinates: { lat, long },
        notifications: { email: emailNotifications, sms }
    };
}

// Example userProfile object
const userProfile = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
        postalCode: '10001',
        coordinates: {
            lat: 40.7128,
            long: -74.0060
        }
    },
    contact: {
        phone: '123-456-7890',
        email: 'john@example.com'
    },
    preferences: {
        newsletter: true,
        notifications: {
            email: true,
            sms: false
        }
    }
};

// Test the flattenProfile function
const flattenedProfile = flattenProfile(userProfile);
console.log(flattenedProfile);


