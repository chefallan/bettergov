import { describe, expect, it } from 'vitest';
import { MUNICIPALITY } from '@/config/site';
import barangayData from '../barangays.json';
import officials from '../officials.json';

describe('barangays.json', () => {
  it('lists 23 barangays', () => {
    expect(barangayData.barangays).toHaveLength(23);
  });

  it('sums to the 2020 census population', () => {
    const sum = barangayData.barangays.reduce(
      (total, barangay) => total + barangay.population,
      0
    );
    expect(sum).toBe(MUNICIPALITY.population2020);
  });
});

describe('officials.json', () => {
  it('names the mayor from the site config', () => {
    expect(officials.mayor.name).toBe(MUNICIPALITY.mayor);
  });

  it('names the vice mayor from the site config', () => {
    expect(officials.viceMayor.name).toBe(MUNICIPALITY.viceMayor);
  });

  it('seats eight councilors', () => {
    expect(officials.councilors).toHaveLength(8);
  });
});
