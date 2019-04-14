module.exports = [
    {
        from: 'templates/pages/home.njk',
        to: 'index.html',
        context: {
            sections: {
                banner: {
                    art: {
                        img: "/assets/images/main-banner.png",
                        animation: "fade-up",
                        alt: "Banner Art"
                    },
                    text: {
                        img: "/assets/images/main-banner-text.png",
                        animation: "fade-up",
                        alt: "CREATE. ANIMATE. PLAY."
                    },
                    text_content: " VoxEditor is the first software that allows you to create your own voxel models, rig them and animate them in no time."
                },
                others: [
                    {
                        id: "modeling-tools",
                        img: "/assets/images/modeling-tools.png",
                        title: "POWERFUL EASY TO USE MODELING TOOLS",
                        description: "Make the most of your creativity with a robust set of tools. If you are an advanced 3D modeler or just starting out, with our super user-friendly interface you will creating amazing stuff right away.",
                        features: [
                            "All in one software with incredible performance",
                            "Windows and Mac supported",
                            "Amazing voxel creation tools",
                            "Emisive Wand. Make your work glow",
                            "Increase your voxels to get that level of detail",
                            "Work with a big Canvas",
                            "Mirror XYZ. Work less, we take care of the rest",
                            "Voxel, Quads and super fast Render view",
                            "Advanced Color Palette",
                            "Super friendly 3D enviroment to work",
                            "And much more"
                        ]
                    },
                    {
                        id: "animation",
                        img: "/assets/images/animation.png",
                        title: "ANIMATE YOUR CREATIONS",
                        description: "A game changer in the voxel world. With our own Skeleton System, VoxEditor allows you to rig and animate anything that you want using the timeline with a super easy to use keyframing mode.",
                        features: [
                            "Animation! Bring your creation to life",
                            "Skeleton System",
                            "Cut & Rig",
                            "Powerful Timeline",
                            "Keyframing interpolation",
                            "Curves",
                            "Animations integrated in one",
                        ]
                    },
                ]
            }
        },
    },
];
