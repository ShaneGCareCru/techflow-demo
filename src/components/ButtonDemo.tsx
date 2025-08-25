import React, { useState } from 'react';
import Button from './Button';

export default function ButtonDemo() {
  const [loadingStates, setLoadingStates] = useState({
    save: false,
    submit: false,
    delete: false,
    download: false
  });

  const handleClick = async (action: keyof typeof loadingStates) => {
    setLoadingStates(prev => ({ ...prev, [action]: true }));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoadingStates(prev => ({ ...prev, [action]: false }));
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      <Button 
        loading={loadingStates.save} 
        onClick={() => handleClick('save')}
        loadingText="Saving..."
      >
        Save Changes
      </Button>
      
      <Button 
        loading={loadingStates.submit} 
        onClick={() => handleClick('submit')}
        loadingText="Submitting..."
      >
        Submit Form
      </Button>
      
      <Button 
        loading={loadingStates.delete} 
        onClick={() => handleClick('delete')}
        loadingText="Deleting..."
        style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 16px' }}
      >
        Delete Item
      </Button>
      
      <Button 
        loading={loadingStates.download} 
        onClick={() => handleClick('download')}
        loadingText="Downloading..."
      >
        Download Report
      </Button>
    </div>
  );
}