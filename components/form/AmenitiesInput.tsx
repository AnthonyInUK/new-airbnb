'use client';
import { useState } from 'react';
import { amenities, Amenity } from '@/utils/amenities';
import { Checkbox } from '@/components/ui/checkbox';


function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
    const [selectedAmenties, setSelectedAmenties] = useState<Amenity[]>
        (defaultValue || amenities)
    const handleChange = (amentity: Amenity) => {
        setSelectedAmenties((prev) => {
            return prev.map((a) => {
                if (a.name === amentity.name) {
                    return {...a, selected:!a.selected}
                }
                return a;
            })
        })
    }
  return (
    <section>
          <input type="hidden" name="amenities" value={JSON.stringify(selectedAmenties)} />
          <div className="grid grid-cols-2 gap-4">
              {selectedAmenties.map((amenity) => {
                  return <div key={amenity.name} className="flex items-center space-x-2">
                      <Checkbox id={amenity.name} checked={amenity.selected} onCheckedChange={() => handleChange(amenity)} />
                      <label htmlFor={amenity.name} className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'>{amenity.name}
                        <amenity.icon className='w-4 h-4' />
                      </label>
                  </div>
              })}
          </div>
      </section>
  )
}

export default AmenitiesInput





