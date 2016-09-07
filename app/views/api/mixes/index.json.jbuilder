@mixes.each do |mix|
	json.set! mix.id do
		json.partial! "api/mixes/mix", mix: mix
	end
end
