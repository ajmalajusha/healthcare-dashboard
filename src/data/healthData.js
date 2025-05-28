export const anatomyIndicators = [
    { id: 'heart', name: 'Healthy Heart', status: 'healthy', top: '30%', left: 'calc(50% + 80px)', color: '#28A745' },
    { id: 'lung', name: 'Healthy Lung', status: 'healthy', top: '35%', left: 'calc(50% - 180px)', color: '#28A745' },
    // Add more indicators if needed based on precise image placement
];

import lungs from "../../public/Lungs.png"
import Teeth from "../../public/Teeth.png"
import Bone from "../../public/bone.png"


export const healthStatusCardsData = [
    {
        id: 'lungs',
        title: 'Lungs',
        date: 'Date: 28 Oct 2021',
        statusValue: 70, // percentage for progress bar
        statusColor: '#DC3545', // Reddish for issues
        icon:lungs 
    },
    {
        id: 'teeth',
        title: 'Teeth',
        date: 'Date: 28 Oct 2021',
        statusValue: 90,
        statusColor: '#007BFF', // Blue, adjust as needed
        icon:Teeth
    },
    {
        id: 'bone',
        title: 'Bone',
        date: 'Date: 28 Oct 2021',
        statusValue: 60,
        statusColor: '#FFC107', // Yellowish/Orange
        icon:Bone
    },
];