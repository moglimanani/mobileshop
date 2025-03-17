const data = [
    {
      "ID": 1,
      "Name": "Galaxy S22",
      "Description": "Latest Samsung Galaxy phone with 120Hz display, 5G, and improved camera.",
      "Price": 799,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Samsung",
      "SKU": "SAMS22-001",
      "Stock": 250,
      "Images": ["image_url_1"],
      "Attributes": {
        "Display": "6.1-inch",
        "Refresh_Rate": "120Hz",
        "Network_5G": true,
        "Storage": "128GB"
      },
      "Rating": 4.5,
      "Reviews": [
        {
          "UserID": 101,
          "Review": "Great phone, amazing display and battery life."
        },
        {
          "UserID": 102,
          "Review": "Love the camera and the smoothness of the display."
        }
      ]
    },
    {
      "ID": 2,
      "Name": "iPhone 14 Pro",
      "Description": "Apple's flagship phone with A16 Bionic chip, ProMotion, and 48MP main camera.",
      "Price": 999,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Apple",
      "SKU": "APP14-001",
      "Stock": 150,
      "Images": ["image_url_2"],
      "Attributes": {
        "Display": "6.1-inch",
        "Refresh_Rate": "120Hz",
        "Network_5G": true,
        "Storage": "128GB"
      },
      "Rating": 4.7,
      "Reviews": [
        {
          "UserID": 201,
          "Review": "The performance is top-notch. Worth every penny!"
        },
        {
          "UserID": 202,
          "Review": "Best iPhone ever! ProMotion makes a big difference."
        }
      ]
    },
    {
      "ID": 3,
      "Name": "OnePlus 10 Pro",
      "Description": "OnePlus flagship with 120Hz AMOLED display and Snapdragon 8 Gen 1.",
      "Price": 899,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "OnePlus",
      "SKU": "OP10-001",
      "Stock": 300,
      "Images": ["image_url_3"],
      "Attributes": {
        "Display": "6.7-inch",
        "Chipset": "Snapdragon 8 Gen 1",
        "RAM": "12GB"
      },
      "Rating": 4.4,
      "Reviews": [
        {
          "UserID": 301,
          "Review": "Fast, smooth, and stylish design. Highly recommend!"
        },
        {
          "UserID": 302,
          "Review": "OnePlus has really stepped up their game with this phone."
        }
      ]
    },
    {
      "ID": 4,
      "Name": "Pixel 7",
      "Description": "Google's latest phone with Tensor chip, OLED display, and improved camera.",
      "Price": 649,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Google",
      "SKU": "GOOGP7-001",
      "Stock": 200,
      "Images": ["image_url_4"],
      "Attributes": {
        "Display": "6.3-inch",
        "Refresh_Rate": "90Hz",
        "Chipset": "Google Tensor",
        "Storage": "128GB"
      },
      "Rating": 4.6,
      "Reviews": [
        {
          "UserID": 401,
          "Review": "Google's software integration is unmatched."
        },
        {
          "UserID": 402,
          "Review": "Great phone, love the camera and stock Android."
        }
      ]
    },
    {
      "ID": 5,
      "Name": "Xiaomi 12 Pro",
      "Description": "Flagship device from Xiaomi with Snapdragon 8 Gen 1 and 50MP camera.",
      "Price": 850,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Xiaomi",
      "SKU": "XM12-001",
      "Stock": 180,
      "Images": ["image_url_5"],
      "Attributes": {
        "Display": "6.73-inch",
        "Chipset": "Snapdragon 8 Gen 1",
        "Storage": "256GB"
      },
      "Rating": 4.3,
      "Reviews": [
        {
          "UserID": 501,
          "Review": "Good performance, but the camera could be better."
        },
        {
          "UserID": 502,
          "Review": "Solid phone, great display, but software is a little bloated."
        }
      ]
    },
    {
      "ID": 6,
      "Name": "Motorola Edge 30 Pro",
      "Description": "Motorola's premium device with Snapdragon 8 Gen 1 and a 6.7-inch OLED display.",
      "Price": 949,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Motorola",
      "SKU": "MOT30-001",
      "Stock": 100,
      "Images": ["image_url_6"],
      "Attributes": {
        "Display": "6.7-inch OLED",
        "Chipset": "Snapdragon 8 Gen 1",
        "Storage": "256GB"
      },
      "Rating": 4.4,
      "Reviews": [
        {
          "UserID": 601,
          "Review": "Impressive screen and performance. A great flagship!"
        },
        {
          "UserID": 602,
          "Review": "Good overall, but Motorola's software experience isn't the best."
        }
      ]
    },
    {
      "ID": 7,
      "Name": "Samsung A53 5G",
      "Description": "Mid-range Samsung phone with 120Hz Super AMOLED display and 64MP camera.",
      "Price": 349,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Samsung",
      "SKU": "SAMA53-001",
      "Stock": 400,
      "Images": ["image_url_7"],
      "Attributes": {
        "Display": "6.5-inch",
        "Refresh_Rate": "120Hz",
        "Storage": "128GB"
      },
      "Rating": 4.2,
      "Reviews": [
        {
          "UserID": 701,
          "Review": "Great phone for the price, smooth and fast."
        },
        {
          "UserID": 702,
          "Review": "Good battery and camera, but the display could be brighter."
        }
      ]
    },
    {
      "ID": 8,
      "Name": "iPhone SE 2022",
      "Description": "Budget-friendly iPhone with A15 Bionic chip and 4.7-inch display.",
      "Price": 429,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Apple",
      "SKU": "APPSE22-001",
      "Stock": 300,
      "Images": ["image_url_8"],
      "Attributes": {
        "Display": "4.7-inch",
        "Chipset": "A15 Bionic",
        "Storage": "64GB/128GB"
      },
      "Rating": 4.6,
      "Reviews": [
        {
          "UserID": 801,
          "Review": "Compact, fast, and works well for everyday use."
        },
        {
          "UserID": 802,
          "Review": "Perfect phone for those who prefer smaller devices!"
        }
      ]
    },
    {
      "ID": 9,
      "Name": "Oppo Find X5 Pro",
      "Description": "Oppo's flagship with 120Hz AMOLED display, Snapdragon 8 Gen 1, and Hasselblad camera technology.",
      "Price": 1099,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Oppo",
      "SKU": "OPFX5-001",
      "Stock": 120,
      "Images": ["image_url_9"],
      "Attributes": {
        "Display": "6.7-inch",
        "Chipset": "Snapdragon 8 Gen 1",
        "Storage": "256GB"
      },
      "Rating": 4.5,
      "Reviews": [
        {
          "UserID": 901,
          "Review": "Excellent camera and design, but a bit expensive."
        },
        {
          "UserID": 902,
          "Review": "Great performance, feels premium."
        }
      ]
    },
    {
      "ID": 10,
      "Name": "Realme GT 2 Pro",
      "Description": "Realme's flagship with Snapdragon 8 Gen 1 and 50MP camera.",
      "Price": 899,
      "Currency": "USD",
      "Category": "Smartphone",
      "Brand": "Realme",
      "SKU": "RLGT2-001",
      "Stock": 150,
      "Images": ["image_url_10"],
      "Attributes": {
        "Display": "6.7-inch",
        "Chipset": "Snapdragon 8 Gen 1",
        "Storage": "256GB"
      },
      "Rating": 4.4,
      "Reviews": [
        {
          "UserID": 1001,
          "Review": "Great value for the specs, solid overall."
        },
        {
          "UserID": 1002,
          "Review": "Phone works great, but it's a bit bulky for me."
        }
      ]
    },
    {
        "ID": 11,
        "Name": "Sony Xperia 1 IV",
        "Description": "Sony's flagship with 4K OLED display, Snapdragon 8 Gen 1, and unique camera features for content creators.",
        "Price": 1299,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Sony",
        "SKU": "SONX1-001",
        "Stock": 80,
        "Images": ["image_url_11"],
        "Attributes": {
          "Display": "6.5-inch 4K OLED",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 1101,
            "Review": "Incredible display, perfect for media creators."
          },
          {
            "UserID": 1102,
            "Review": "The camera features are fantastic, but it's a bit pricey."
          }
        ]
      },
      {
        "ID": 12,
        "Name": "Samsung Galaxy Z Flip 4",
        "Description": "Foldable phone with 6.7-inch AMOLED display, Snapdragon 8+ Gen 1, and compact foldable design.",
        "Price": 999,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Samsung",
        "SKU": "SAMZ4-001",
        "Stock": 200,
        "Images": ["image_url_12"],
        "Attributes": {
          "Display": "6.7-inch",
          "Chipset": "Snapdragon 8+ Gen 1",
          "Storage": "128GB"
        },
        "Rating": 4.5,
        "Reviews": [
          {
            "UserID": 1201,
            "Review": "The foldable design is amazing! Highly recommend."
          },
          {
            "UserID": 1202,
            "Review": "Love the foldable screen, but the battery could be better."
          }
        ]
      },
      {
        "ID": 13,
        "Name": "Vivo V23 Pro",
        "Description": "Vivo's mid-range device with 108MP camera and 90Hz AMOLED display.",
        "Price": 599,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Vivo",
        "SKU": "VIVV23-001",
        "Stock": 250,
        "Images": ["image_url_13"],
        "Attributes": {
          "Display": "6.56-inch AMOLED",
          "Camera": "108MP",
          "RAM": "8GB",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 1301,
            "Review": "Good camera and display, but software could use improvement."
          },
          {
            "UserID": 1302,
            "Review": "Great phone for the price, camera quality is impressive."
          }
        ]
      },
      {
        "ID": 14,
        "Name": "Asus Zenfone 9",
        "Description": "Compact flagship with Snapdragon 8 Gen 1, 120Hz AMOLED display, and great camera features.",
        "Price": 799,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Asus",
        "SKU": "ASZEN9-001",
        "Stock": 150,
        "Images": ["image_url_14"],
        "Attributes": {
          "Display": "5.9-inch AMOLED",
          "RAM": "16GB",
          "Storage": "256GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 1401,
            "Review": "Perfect size, fast, and responsive."
          },
          {
            "UserID": 1402,
            "Review": "Great compact phone, but I wish the battery was larger."
          }
        ]
      },
      {
        "ID": 15,
        "Name": "Motorola Moto G Power",
        "Description": "Budget-friendly Motorola phone with 6.5-inch HD display and 5000mAh battery.",
        "Price": 199,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Motorola",
        "SKU": "MOTGP-001",
        "Stock": 500,
        "Images": ["image_url_15"],
        "Attributes": {
          "Display": "6.5-inch",
          "Battery": "5000mAh",
          "Chipset": "Snapdragon 662"
        },
        "Rating": 4.1,
        "Reviews": [
          {
            "UserID": 1501,
            "Review": "Battery life is incredible. Works well for basic tasks."
          },
          {
            "UserID": 1502,
            "Review": "Nice for everyday use, but doesn't handle gaming well."
          }
        ]
      },
      {
        "ID": 16,
        "Name": "Samsung Galaxy S21 FE",
        "Description": "Affordable version of Samsung's flagship with Snapdragon 888, 120Hz AMOLED display, and triple camera setup.",
        "Price": 699,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Samsung",
        "SKU": "SAMS21FE-001",
        "Stock": 180,
        "Images": ["image_url_16"],
        "Attributes": {
          "Display": "6.4-inch",
          "Chipset": "Snapdragon 888",
          "Storage": "128GB"
        },
        "Rating": 4.4,
        "Reviews": [
          {
            "UserID": 1601,
            "Review": "Great value for the price, excellent display."
          },
          {
            "UserID": 1602,
            "Review": "Camera is good, but battery life could be better."
          }
        ]
      },
      {
        "ID": 17,
        "Name": "Xiaomi Redmi Note 11",
        "Description": "Mid-range phone with 6.43-inch AMOLED display and Snapdragon 680.",
        "Price": 229,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Xiaomi",
        "SKU": "XMRN11-001",
        "Stock": 400,
        "Images": ["image_url_17"],
        "Attributes": {
          "Display": "6.43-inch AMOLED",
          "Chipset": "Snapdragon 680",
          "Storage": "64GB"
        },
        "Rating": 4.2,
        "Reviews": [
          {
            "UserID": 1701,
            "Review": "Great phone for the price, smooth performance."
          },
          {
            "UserID": 1702,
            "Review": "Fantastic for basic tasks, but not for heavy gaming."
          }
        ]
      },
      {
        "ID": 18,
        "Name": "Honor Magic 4 Pro",
        "Description": "Flagship from Honor with Snapdragon 8 Gen 1 and a quad-camera setup.",
        "Price": 1099,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Honor",
        "SKU": "HONM4-001",
        "Stock": 100,
        "Images": ["image_url_18"],
        "Attributes": {
          "Display": "6.81-inch",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 1801,
            "Review": "Amazing camera and performance, one of the best from Honor."
          },
          {
            "UserID": 1802,
            "Review": "Super fast and smooth, the camera is fantastic."
          }
        ]
      },
      {
        "ID": 19,
        "Name": "LG Velvet",
        "Description": "Stylish phone with 6.8-inch OLED display, Snapdragon 765G, and a dual-camera setup.",
        "Price": 499,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "LG",
        "SKU": "LGV-001",
        "Stock": 250,
        "Images": ["image_url_19"],
        "Attributes": {
          "Display": "6.8-inch OLED",
          "Chipset": "Snapdragon 765G",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 1901,
            "Review": "The OLED display is fantastic and the phone feels premium."
          },
          {
            "UserID": 1902,
            "Review": "Design is great, but battery life could be better."
          }
        ]
      },
      {
        "ID": 20,
        "Name": "iPhone 13",
        "Description": "Powerful phone with A15 Bionic chip and excellent camera capabilities.",
        "Price": 799,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Apple",
        "SKU": "APP13-001",
        "Stock": 350,
        "Images": ["image_url_20"],
        "Attributes": {
          "Display": "6.1-inch",
          "Chipset": "A15 Bionic",
          "Storage": "128GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 2001,
            "Review": "Incredible speed and camera. Worth the upgrade!"
          },
          {
            "UserID": 2002,
            "Review": "Amazing phone. Camera and performance are top-notch."
          }
        ]
      },
      {
        "ID": 21,
        "Name": "Nokia X20",
        "Description": "Mid-range phone with Snapdragon 480, 6.67-inch display, and 48MP quad-camera setup.",
        "Price": 399,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Nokia",
        "SKU": "NOKX20-001",
        "Stock": 180,
        "Images": ["image_url_21"],
        "Attributes": {
          "Display": "6.67-inch",
          "Chipset": "Snapdragon 480",
          "Storage": "128GB"
        },
        "Rating": 4.2,
        "Reviews": [
          {
            "UserID": 2101,
            "Review": "Good budget phone, decent camera and battery life."
          },
          {
            "UserID": 2102,
            "Review": "A bit slow with demanding apps, but solid for the price."
          }
        ]
      },
      {
        "ID": 22,
        "Name": "Realme 9 Pro+",
        "Description": "Mid-range phone with 90Hz AMOLED display, Snapdragon 695, and 50MP main camera.",
        "Price": 399,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Realme",
        "SKU": "RL9P-001",
        "Stock": 250,
        "Images": ["image_url_22"],
        "Attributes": {
          "Display": "6.4-inch AMOLED",
          "Chipset": "Snapdragon 695",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 2201,
            "Review": "Very good camera for the price. Overall great experience."
          },
          {
            "UserID": 2202,
            "Review": "The phone looks good but could be more responsive under heavy use."
          }
        ]
      },
      {
        "ID": 23,
        "Name": "Huawei P50 Pro",
        "Description": "Flagship Huawei phone with Kirin 9000, 120Hz OLED display, and 50MP quad-camera setup.",
        "Price": 1099,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Huawei",
        "SKU": "HUWP50-001",
        "Stock": 130,
        "Images": ["image_url_23"],
        "Attributes": {
          "Display": "6.6-inch OLED",
          "Chipset": "Kirin 9000",
          "Storage": "256GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 2301,
            "Review": "The camera is simply amazing. Great overall experience."
          },
          {
            "UserID": 2302,
            "Review": "Slightly on the expensive side but great specs and performance."
          }
        ]
      },
      {
        "ID": 24,
        "Name": "Xiaomi Mi 11 Ultra",
        "Description": "Premium phone with Snapdragon 888, 120Hz AMOLED display, and 50MP triple camera setup.",
        "Price": 1099,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Xiaomi",
        "SKU": "XMM11U-001",
        "Stock": 120,
        "Images": ["image_url_24"],
        "Attributes": {
          "Display": "6.81-inch AMOLED",
          "Chipset": "Snapdragon 888",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 2401,
            "Review": "Exceptional display and camera quality, best phone from Xiaomi."
          },
          {
            "UserID": 2402,
            "Review": "Great performance and battery, but it's a bit heavy."
          }
        ]
      },
      {
        "ID": 25,
        "Name": "Oppo Reno 7 Pro",
        "Description": "Mid-range phone with 90Hz AMOLED, MediaTek Dimensity 1200, and 50MP camera.",
        "Price": 499,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Oppo",
        "SKU": "OPRE7-001",
        "Stock": 200,
        "Images": ["image_url_25"],
        "Attributes": {
          "Display": "6.55-inch AMOLED",
          "Chipset": "MediaTek Dimensity 1200",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 2501,
            "Review": "Good performance, good camera, and very stylish design."
          },
          {
            "UserID": 2502,
            "Review": "Battery life is good but software could be improved."
          }
        ]
      },
      {
        "ID": 26,
        "Name": "Poco F3",
        "Description": "Flagship killer with Snapdragon 870, 120Hz AMOLED, and 48MP triple camera.",
        "Price": 349,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Poco",
        "SKU": "POF3-001",
        "Stock": 300,
        "Images": ["image_url_26"],
        "Attributes": {
          "Display": "6.67-inch AMOLED",
          "Chipset": "Snapdragon 870",
          "Storage": "128GB"
        },
        "Rating": 4.5,
        "Reviews": [
          {
            "UserID": 2601,
            "Review": "Great phone for the price, amazing performance."
          },
          {
            "UserID": 2602,
            "Review": "Super fast, the camera could be better, but still solid."
          }
        ]
      },
      {
        "ID": 27,
        "Name": "Realme GT",
        "Description": "High-performance phone with Snapdragon 870 and 120Hz Super AMOLED display.",
        "Price": 449,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Realme",
        "SKU": "RLGT-001",
        "Stock": 250,
        "Images": ["image_url_27"],
        "Attributes": {
          "Display": "6.43-inch Super AMOLED",
          "Chipset": "Snapdragon 870",
          "Storage": "128GB"
        },
        "Rating": 4.4,
        "Reviews": [
          {
            "UserID": 2701,
            "Review": "A powerful phone with great display and performance."
          },
          {
            "UserID": 2702,
            "Review": "Good for gaming and multitasking, but the battery could be larger."
          }
        ]
      },
      {
        "ID": 28,
        "Name": "Motorola Edge+",
        "Description": "Motorola's premium phone with 6.7-inch OLED display, Snapdragon 865, and 108MP camera.",
        "Price": 999,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Motorola",
        "SKU": "MOTEDGE-001",
        "Stock": 150,
        "Images": ["image_url_28"],
        "Attributes": {
          "Display": "6.7-inch OLED",
          "Chipset": "Snapdragon 865",
          "Storage": "256GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 2801,
            "Review": "Impressive camera and display. Motorola has stepped up."
          },
          {
            "UserID": 2802,
            "Review": "Excellent performance, but a little bulky."
          }
        ]
      },
      {
        "ID": 29,
        "Name": "Google Pixel 6",
        "Description": "Google’s flagship phone with Tensor chip, 90Hz OLED display, and 50MP main camera.",
        "Price": 599,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Google",
        "SKU": "GOOGP6-001",
        "Stock": 220,
        "Images": ["image_url_29"],
        "Attributes": {
          "Display": "6.4-inch OLED",
          "Chipset": "Google Tensor",
          "Storage": "128GB"
        },
        "Rating": 4.5,
        "Reviews": [
          {
            "UserID": 2901,
            "Review": "The camera is phenomenal, very smooth phone overall."
          },
          {
            "UserID": 2902,
            "Review": "Good phone, but the battery life can be a bit better."
          }
        ]
      },
      {
        "ID": 30,
        "Name": "iPhone 12 Mini",
        "Description": "Compact version of iPhone 12 with A14 Bionic chip and 5.4-inch Super Retina display.",
        "Price": 699,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Apple",
        "SKU": "APP12M-001",
        "Stock": 300,
        "Images": ["image_url_30"],
        "Attributes": {
          "Display": "5.4-inch Super Retina",
          "Chipset": "A14 Bionic",
          "Storage": "64GB"
        },
        "Rating": 4.4,
        "Reviews": [
          {
            "UserID": 3001,
            "Review": "Perfect size for those who want a small phone, super fast."
          },
          {
            "UserID": 3002,
            "Review": "Good phone overall, but battery life is not the best."
          }
        ]
      },
      {
        "ID": 31,
        "Name": "Samsung Galaxy Z Fold 4",
        "Description": "Premium foldable phone with 7.6-inch AMOLED, Snapdragon 8+ Gen 1, and 120Hz refresh rate.",
        "Price": 1799,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Samsung",
        "SKU": "SAMZ4F-001",
        "Stock": 100,
        "Images": ["image_url_31"],
        "Attributes": {
          "Display": "7.6-inch AMOLED",
          "Chipset": "Snapdragon 8+ Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.8,
        "Reviews": [
          {
            "UserID": 3101,
            "Review": "The foldable design is revolutionary. Very happy with the purchase!"
          },
          {
            "UserID": 3102,
            "Review": "Amazing tech, though a bit expensive. Worth it for tech enthusiasts."
          }
        ]
      },
      {
        "ID": 32,
        "Name": "OnePlus Nord 2",
        "Description": "Mid-range phone with MediaTek Dimensity 1200, 90Hz AMOLED display, and 50MP camera.",
        "Price": 399,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "OnePlus",
        "SKU": "OPND2-001",
        "Stock": 280,
        "Images": ["image_url_32"],
        "Attributes": {
          "Display": "6.43-inch AMOLED",
          "Chipset": "MediaTek Dimensity 1200",
          "Storage": "128GB"
        },
        "Rating": 4.4,
        "Reviews": [
          {
            "UserID": 3201,
            "Review": "Great performance and display. Definitely worth the price."
          },
          {
            "UserID": 3202,
            "Review": "Good camera, smooth performance. Could be better for gaming."
          }
        ]
      },
      {
        "ID": 33,
        "Name": "Xiaomi Mi 10T Pro",
        "Description": "Flagship phone with Snapdragon 865, 144Hz LCD display, and 108MP camera.",
        "Price": 599,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Xiaomi",
        "SKU": "XMM10T-001",
        "Stock": 220,
        "Images": ["image_url_33"],
        "Attributes": {
          "Display": "6.67-inch LCD",
          "Chipset": "Snapdragon 865",
          "Storage": "128GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 3301,
            "Review": "Incredible camera and smooth performance for the price."
          },
          {
            "UserID": 3302,
            "Review": "Great value for money, but the LCD display could be better."
          }
        ]
      },
      {
        "ID": 34,
        "Name": "Oppo Find X5 Pro",
        "Description": "Oppo's flagship with Snapdragon 8 Gen 1, 120Hz OLED display, and 50MP camera.",
        "Price": 1099,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Oppo",
        "SKU": "OPFX5-001",
        "Stock": 150,
        "Images": ["image_url_34"],
        "Attributes": {
          "Display": "6.7-inch AMOLED",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 3401,
            "Review": "Superb display and camera. One of the best in the market."
          },
          {
            "UserID": 3402,
            "Review": "Slightly heavy but performs flawlessly. Great value."
          }
        ]
      },
      {
        "ID": 35,
        "Name": "Nokia G50",
        "Description": "Affordable phone with Snapdragon 480, 6.82-inch display, and 48MP camera.",
        "Price": 249,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Nokia",
        "SKU": "NOKG50-001",
        "Stock": 320,
        "Images": ["image_url_35"],
        "Attributes": {
          "Display": "6.82-inch",
          "Chipset": "Snapdragon 480",
          "Storage": "64GB"
        },
        "Rating": 4.1,
        "Reviews": [
          {
            "UserID": 3501,
            "Review": "Good phone for its price, solid display and camera."
          },
          {
            "UserID": 3502,
            "Review": "Battery life is great, but the performance is a bit sluggish."
          }
        ]
      },
      {
        "ID": 36,
        "Name": "OnePlus 10 Pro",
        "Description": "Premium OnePlus device with Snapdragon 8 Gen 1, 120Hz AMOLED display, and 50MP triple camera.",
        "Price": 999,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "OnePlus",
        "SKU": "OP10P-001",
        "Stock": 180,
        "Images": ["image_url_36"],
        "Attributes": {
          "Display": "6.7-inch AMOLED",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 3601,
            "Review": "Excellent performance and battery life. One of the best Android phones."
          },
          {
            "UserID": 3602,
            "Review": "Great phone overall but lacks wireless charging support."
          }
        ]
      },
      {
        "ID": 37,
        "Name": "Sony Xperia 10 III",
        "Description": "Mid-range phone with Snapdragon 690, 6-inch OLED display, and 12MP triple camera setup.",
        "Price": 499,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Sony",
        "SKU": "SONX10-001",
        "Stock": 200,
        "Images": ["image_url_37"],
        "Attributes": {
          "Display": "6-inch OLED",
          "Chipset": "Snapdragon 690",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 3701,
            "Review": "Good display and camera. Battery life is solid."
          },
          {
            "UserID": 3702,
            "Review": "Good value but lacks 5G support in some areas."
          }
        ]
      },
      {
        "ID": 38,
        "Name": "Asus ROG Phone 5",
        "Description": "Gaming-focused phone with Snapdragon 888, 144Hz AMOLED display, and 6000mAh battery.",
        "Price": 999,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Asus",
        "SKU": "ASROG5-001",
        "Stock": 100,
        "Images": ["image_url_38"],
        "Attributes": {
          "Display": "6.78-inch AMOLED",
          "Chipset": "Snapdragon 888",
          "Storage": "256GB"
        },
        "Rating": 4.8,
        "Reviews": [
          {
            "UserID": 3801,
            "Review": "Best gaming phone out there, amazing performance!"
          },
          {
            "UserID": 3802,
            "Review": "Perfect for gaming, but it’s quite heavy."
          }
        ]
      },
      {
        "ID": 39,
        "Name": "Realme GT 2 Pro",
        "Description": "High-end phone with Snapdragon 8 Gen 1, 120Hz AMOLED display, and 50MP triple camera.",
        "Price": 899,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Realme",
        "SKU": "RLGT2P-001",
        "Stock": 250,
        "Images": ["image_url_39"],
        "Attributes": {
          "Display": "6.7-inch AMOLED",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "128GB"
        },
        "Rating": 4.6,
        "Reviews": [
          {
            "UserID": 3901,
            "Review": "A flagship killer with great performance and camera."
          },
          {
            "UserID": 3902,
            "Review": "The battery life could be a little better for such a powerful phone."
          }
        ]
      },
      {
        "ID": 40,
        "Name": "iPhone SE 2022",
        "Description": "Compact phone with A15 Bionic chip, 4.7-inch Retina display, and 12MP camera.",
        "Price": 399,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Apple",
        "SKU": "APPSE-001",
        "Stock": 400,
        "Images": ["image_url_40"],
        "Attributes": {
          "Display": "4.7-inch Retina",
          "Chipset": "A15 Bionic",
          "Storage": "64GB"
        },
        "Rating": 4.4,
        "Reviews": [
          {
            "UserID": 4001,
            "Review": "Great performance in a small form factor. Perfect for those who want a compact phone."
          },
          {
            "UserID": 4002,
            "Review": "The camera is good but not as great as the newer iPhones."
          }
        ]
      },
      {
        "ID": 41,
        "Name": "Vivo X70 Pro",
        "Description": "Premium phone with Snapdragon 888+, 120Hz AMOLED display, and 50MP gimbal camera system.",
        "Price": 799,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Vivo",
        "SKU": "VIVOX70-001",
        "Stock": 180,
        "Images": ["image_url_41"],
        "Attributes": {
          "Display": "6.56-inch AMOLED",
          "Chipset": "Snapdragon 888+",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 4101,
            "Review": "Great camera, very smooth performance."
          },
          {
            "UserID": 4102,
            "Review": "Beautiful design and display, very impressed."
          }
        ]
      },
      {
        "ID": 42,
        "Name": "Samsung Galaxy A53 5G",
        "Description": "Mid-range phone with Snapdragon 750G, 6.5-inch Super AMOLED, and quad-camera setup.",
        "Price": 449,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Samsung",
        "SKU": "SAMGA53-001",
        "Stock": 300,
        "Images": ["image_url_42"],
        "Attributes": {
          "Display": "6.5-inch Super AMOLED",
          "Chipset": "Snapdragon 750G",
          "Storage": "128GB"
        },
        "Rating": 4.3,
        "Reviews": [
          {
            "UserID": 4201,
            "Review": "Good performance and display. Battery life is solid."
          },
          {
            "UserID": 4202,
            "Review": "Nice phone for the price, but the camera could be better."
          }
        ]
      },
      {
        "ID": 43,
        "Name": "Xiaomi Redmi Note 10 Pro",
        "Description": "Mid-range phone with Snapdragon 732G, 6.67-inch AMOLED display, and 108MP camera.",
        "Price": 279,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Xiaomi",
        "SKU": "XMRNP10-001",
        "Stock": 350,
        "Images": ["image_url_43"],
        "Attributes": {
          "Display": "6.67-inch AMOLED",
          "Chipset": "Snapdragon 732G",
          "Storage": "128GB"
        },
        "Rating": 4.5,
        "Reviews": [
          {
            "UserID": 4301,
            "Review": "Amazing value for the price, great camera and display."
          },
          {
            "UserID": 4302,
            "Review": "Good performance, but the camera could be a bit more consistent."
          }
        ]
      },
      {
        "ID": 44,
        "Name": "Honor Magic 4 Pro",
        "Description": "Premium flagship phone with Snapdragon 8 Gen 1, 6.81-inch OLED display, and 50MP quad-camera.",
        "Price": 1199,
        "Currency": "USD",
        "Category": "Smartphone",
        "Brand": "Honor",
        "SKU": "HONMAG4-001",
        "Stock": 150,
        "Images": ["image_url_44"],
        "Attributes": {
          "Display": "6.81-inch OLED",
          "Chipset": "Snapdragon 8 Gen 1",
          "Storage": "256GB"
        },
        "Rating": 4.7,
        "Reviews": [
          {
            "UserID": 4401,
            "Review": "One of the best phones for performance and display quality."
          },
          {
            "UserID": 4402,
            "Review": "Expensive but well worth the price for those who need the best."
          }
        ]
      }
  ]
  
  export default data